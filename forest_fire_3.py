import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import warnings
import pickle
warnings.filterwarnings("ignore")

forest = pd.read_csv("forestfires.csv")
# data = np.array(forest)

forest['fire_scale'] = forest['area'].apply(lambda x: 'no_fire' if (x==0) else
                                            'small_fire' if ((x>0)&(x<2)) else
                                            'large_fire'
                                            )


d = forest.copy()
X = d.drop(['area', 'fire_scale'], axis = 1)
y = d['area']

X = pd.get_dummies(X, ['month', 'day'])


t = forest.groupby(['month'])['month'].count()
forest.groupby(['month', 'fire_scale'])['fire_scale'].nunique()

forest.groupby(['month', 'fire_scale'])['fire_scale'].count()

d = forest[forest['area']>0].copy() 

for m in d['month'].unique():
  if((m!='aug')&(m!='sep')):
    temp = d[d['month']==m].sample(300, replace=True)
    d = pd.concat([d, temp], axis=0)

# print(d.shape)

t = forest.groupby(['month'])['month'].count()
plt.bar(t.index, t)

X = d.drop(['area', 'fire_scale'], axis = 1)
y = d['area']

X = pd.get_dummies(X, ['month', 'day'])
X.head(2)

forest = forest.drop(['month'], axis = 1)
forest = forest.drop(['X'], axis = 1)
forest = forest.drop(['Y'], axis = 1)

forest = forest.drop(['day'], axis = 1)
forest = forest.drop(['FFMC'], axis = 1)
forest = forest.drop(['DMC'], axis = 1)
forest = forest.drop(['RH'], axis = 1)
forest = forest.drop(['area'], axis = 1)
forest = forest.drop(['DC'], axis = 1)
forest = forest.drop(['ISI'], axis = 1)


forest['fire_scale'] = forest['fire_scale'].replace('no_fire', 0.0)
forest['fire_scale'] = forest['fire_scale'].replace('small_fire', 1.0)
forest['fire_scale'] = forest['fire_scale'].replace('large_fire', 2.0)

forest['temp'] = forest['temp'].astype(int)
forest['wind'] = forest['wind'].astype(int)
forest['rain'] = forest['rain'].astype(int)
forest['fire_scale'] = forest['fire_scale'].astype(int)

data = np.array(forest)

X = data[1:, 1:-1]
y = data[1:, -1]
y = y.astype('float')
X = X.astype('float')
# print(X,y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
log_reg = LogisticRegression()

log_reg.fit(X_train, y_train)

# inputt=[int(x) for x in "8.2 6.7 0.0".split(' ')]
# final=[np.array(inputt)]

from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.transform(X_test)

from sklearn.ensemble import RandomForestClassifier
classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy')
classifier.fit(X_train, y_train)

y_pred = classifier.predict(X_test) 
y_pred

from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_test, y_pred)
from sklearn.metrics import accuracy_score 
print ("Accuracy : ", accuracy_score(y_test, y_pred))
cm

df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
df

print(forest)

pickle.dump(classifier,open('modelFinal3.pkl','wb'))
modelFinal3=pickle.load(open('modelFinal3.pkl','rb'))

