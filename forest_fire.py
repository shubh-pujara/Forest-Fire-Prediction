import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import warnings
import pickle
warnings.filterwarnings("ignore")

data = pd.read_csv("Forest_fire.csv")
data = np.array(data)

X = data[1:, 1:-1]
y = data[1:, -1]
y = y.astype('int')
X = X.astype('int')
# print(X,y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
log_reg = LogisticRegression()


log_reg.fit(X_train, y_train)

inputt=[int(x) for x in "45 32 60".split(' ')]
final=[np.array(inputt)]

# b = log_reg.predict_proba(final)

# y_pred = log_reg.predict(X_test) 
# y_pred

# from sklearn.metrics import confusion_matrix
# from sklearn.metrics import accuracy_score 

# print ("Accuracy : ", accuracy_score(y_test, y_pred))




# pickle.dump(log_reg,open('model2.pkl','wb'))
# model=pickle.load(open('model2.pkl','rb'))

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

pickle.dump(classifier,open('model1.pkl','wb'))
model1=pickle.load(open('model1.pkl','rb'))

# classifier.fit(X_train, y_train)
