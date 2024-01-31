import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pickle

forest = pd.read_csv("forestfires.csv")
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

X = forest.iloc[:, :3]
# def convert_to_int(word):
#   word_dict = {'no_fire': 1, 'small_fire': 2, 'large_fire': 3}
#   return word_dict[word]

# X['fire_scale'] = X['fire_scale'].apply(lambda x: convert_to_int(x))

y = forest.iloc[:, -1]

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()

regressor.fit(X,y)

# pickle.dump(regressor, open('modelFinal7.pkl', 'wb'))
# modelFinal7 = pickle.load(open('modelFinal7.pkl', 'rb'))


print(forest)

