import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import warnings
from sklearn import metrics
from sklearn import linear_model
import pickle
from sklearn import svm
import matplotlib.pyplot as plt
warnings.filterwarnings("ignore")

import math      


forest = pd.read_csv("forestfires.csv")

# forest.head(2)
# forest = np.array(forest)

forest['fire_scale'] = forest['area'].apply(lambda x: 'no_fire' if (x==0) else
                                            'small_fire' if ((x>0)&(x<2)) else
                                            'large_fire'
                                            )

# print(forest.shape)
forest.head(2)

d = forest.copy()
X = d.drop(['area', 'fire_scale'], axis = 1)
y = d['area']

X = pd.get_dummies(X, ['month', 'day'])
X.head(2)

x_cols_for_scaling = ['X', 'Y', 'FFMC', 'DMC', 'DC', 'ISI', 'temp', 'RH', 'wind', 'rain']

X.columns

t = forest.groupby(['month'])['month'].count()
forest.groupby(['month', 'fire_scale'])['fire_scale'].nunique()

forest.groupby(['month', 'fire_scale'])['fire_scale'].count()

d = forest[forest['area']>0].copy() 

# print(d.shape)
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

# data = np.array(forest)

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

# print(forest.shape)
# print(forest)

forest['fire_scale'] = forest['fire_scale'].replace('no_fire', 0)
forest['fire_scale'] = forest['fire_scale'].replace('small_fire', 1)
forest['fire_scale'] = forest['fire_scale'].replace('large_fire', 2)


# forest['month'] = forest['month'].replace('jan', 1)
# forest['month'] = forest['month'].replace('feb', 2)
# forest['month'] = forest['month'].replace('mar', 3)
# forest['month'] = forest['month'].replace('apr', 4)
# forest['month'] = forest['month'].replace('may', 5)
# forest['month'] = forest['month'].replace('jun', 6)
# forest['month'] = forest['month'].replace('jul', 7)
# forest['month'] = forest['month'].replace('aug', 8)
# forest['month'] = forest['month'].replace('sep', 9)
# forest['month'] = forest['month'].replace('oct', 10)
# forest['month'] = forest['month'].replace('nov', 11)
# forest['month'] = forest['month'].replace('dec', 12)




# forest['day'] = forest['day'].replace('mon', 1)
# forest['day'] = forest['day'].replace('tue', 2)
# forest['day'] = forest['day'].replace('wed', 3)
# forest['day'] = forest['day'].replace('thu', 4)
# forest['day'] = forest['day'].replace('fri', 5)
# forest['day'] = forest['day'].replace('sat', 6)
# forest['day'] = forest['day'].replace('sun', 7)




# print(forest)

data = np.array(forest)



X = data[1:, 1:-1]
y = data[1:, -1]

y = y.astype('int')
X = X.astype('int')
# fin = forest.drop(['confidence', 'acq_date', 'acq_time', 'bright_t31', 'type_0'], axis = 1)
# X_train, X_test, y_train, y_test = train_test_split(fin.iloc[:, :500], y, test_size=0.3, random_state=0)

# print(X,y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
log_reg = LogisticRegression()

log_reg.fit(X_train, y_train)


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

# df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
# df

print(forest)

# pickle.dump(classifier,open('modelFinal.pkl','wb'))
# modelFinal=pickle.load(open('modelFinal.pkl','rb'))

# from sklearn.preprocessing import StandardScaler

# scaler = StandardScaler()
# X_scaled = scaler.fit_transform(X)

# # split into train and test set
# X_train, X_test, y_train, y_test = train_test_split(
#     X_scaled, y, stratify=y, test_size=0.10, random_state=42
# )

# from sklearn.ensemble import RandomForestClassifier

# # create the classifier
# classifier = RandomForestClassifier(n_estimators=100)

# # Train the model using the training sets
# classifier.fit(X_train, y_train)


# # predictin on the test set
# y_pred = classifier.predict(X_test)


# from sklearn.metrics import accuracy_score 

# # Calculate Model Accuracy
# print("Accuracy:", accuracy_score(y_test, y_pred))

# from sklearn.svm import SVC
# classifier = SVC(kernel = 'rbf', random_state = 0)
# classifier.fit(X_train, y_train)

# y_pred = classifier.predict(X_test) 
# y_pred

# from sklearn.metrics import confusion_matrix
# cm = confusion_matrix(y_test, y_pred)
# from sklearn.metrics import accuracy_score 
# print ("Accuracy : ", accuracy_score(y_test, y_pred))
# cm

# df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
# df

# from sklearn.ensemble import RandomForestClassifier
# classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy')
# classifier.fit(X_train, y_train)

# y_pred = classifier.predict(X_test) 
# y_pred

# from sklearn.metrics import confusion_matrix
# cm = confusion_matrix(y_test, y_pred)
# from sklearn.metrics import accuracy_score 
# print ("Accuracy : ", accuracy_score(y_test, y_pred))
# cm

# df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
# df

# print(forest)

# pickle.dump(classifier,open('modelNoMNoDRM.pkl','wb'))
# modelNoMNODRM=pickle.load(open('modelNoMNoDRM.pkl','rb'))

# x_train, x_test, y_train, y_test = train_test_split(X, np.log(y + 1), shuffle = True)
# print(x_train.shape, x_test.shape)

# x_train_orig = x_train.loc[:, x_cols_for_scaling]
# x_train_cat = x_train.drop(x_cols_for_scaling, axis=1)

# x_test_orig = x_test.loc[:, x_train_orig.columns]
# x_test_cat = x_test.loc[:, x_train_cat.columns]


# reg = linear_model.LinearRegression()
# reg.fit(x_train, y_train)

# #predict
# y_pred = reg.predict(x_test)

# #score
# mse = metrics.mean_squared_error(y_test, y_pred)
# print('mse: ', np.round(mse, 4))

# mae = metrics.mean_absolute_error(y_test, y_pred)
# print('mae: ', np.round(mae, 4))

# r2 = metrics.r2_score(y_test, y_pred)
# print('r2: ', np.round(r2, 4))

# #plot
# plt.scatter(y_test, y_pred, alpha = 0.5)

# reg = linear_model.LinearRegression()
# reg.fit(x_train, y_train)

# #predict
# y_pred = reg.predict(x_test)

# #score
# mse = metrics.mean_squared_error(y_test, y_pred)
# print('mse: ', np.round(mse, 4))

# mae = metrics.mean_absolute_error(y_test, y_pred)
# print('mae: ', np.round(mae, 4))

# r2 = metrics.r2_score(y_test, y_pred)
# print('r2: ', np.round(r2, 4))

# #plot
# plt.scatter(y_test, y_pred, alpha = 0.5)
# plt.xlabel('y_test')
# plt.ylabel('y_pred')









# from sklearn.preprocessing import StandardScaler
# sc = StandardScaler()
# X_train = sc.fit_transform(X_train)
# X_test = sc.transform(X_test)

# from sklearn.ensemble import RandomForestClassifier
# classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy')
# classifier.fit(X_train, y_train)

# y_pred = classifier.predict(X_test) 
# y_pred

# from sklearn.metrics import confusion_matrix
# cm = confusion_matrix(y_test, y_pred)
# from sklearn.metrics import accuracy_score 
# print ("Accuracy : ", accuracy_score(y_test, y_pred))
# cm

# df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
# df

# pickle.dump(classifier,open('model1.pkl','wb'))
# model1=pickle.load(open('model1.pkl','rb'))













# reg = svm(C=1, kernel='rbf', gamma='auto', max_iter = 5e4, cache_size=1000)
# reg.fit(x_train, y_train)

# #predict
# y_pred = reg.predict(x_test)

# #score
# mse = metrics.mean_squared_error(y_test, y_pred)
# print('mse: ', np.round(mse, 4))

# mae = metrics.mean_absolute_error(y_test, y_pred)
# print('mae: ', np.round(mae, 4))

# r2 = metrics.r2_score(y_test, y_pred)
# print('r2: ', np.round(r2, 4))

# #plot
# plt.scatter(y_test, y_pred, alpha = 0.5)
# plt.xlabel('y_test')
# plt.ylabel('y_pred')


# dfmain.head(2)
# forest = forest.drop(['track'], axis = 1)

# forest = forest.drop(['instrument', 'version'], axis = 1)

# daynight_map = {"D": 1, "N": 0}
# satellite_map = {"Terra": 1, "Aqua": 0}

# forest['daynight'] = forest['daynight'].map(daynight_map)
# forest['satellite'] = forest['satellite'].map(satellite_map)

# types = pd.get_dummies(forest['type'])
# forest = pd.concat([forest, types], axis=1)

# forest = forest.drop(['type'], axis = 1)

# forest = forest.rename(columns={0: 'type_0', 2: 'type_2', 3: 'type_3'})

# bins = [0, 1, 2, 3, 4, 5]
# labels = [1,2,3,4,5]
# forest['scan_binned'] = pd.cut(forest['scan'], bins=bins, labels=labels)

# forest['acq_date'] = pd.to_datetime(forest['acq_date'])

# forest = forest.drop(['scan'], axis = 1)

# forest['year'] = forest['acq_date'].dt.year
# forest['month'] = forest['acq_date'].dt.month
# forest['day'] = forest['acq_date'].dt.day

# y = forest['confidence']
# fin = forest.drop(['confidence', 'acq_date', 'acq_time', 'bright_t31', 'type_0'], axis = 1)

# # X_train, X_test, ytrain, ytest = train_test_split(fin.iloc[:, :500], y, test_size=0.2)
# X_train, X_test, y_train, y_test = train_test_split(fin.iloc[:, :500], y, test_size=0.3, random_state=0)


# from sklearn.preprocessing import StandardScaler
# sc = StandardScaler()
# X_train = sc.fit_transform(X_train)
# X_test = sc.transform(X_test)

# from sklearn.ensemble import RandomForestClassifier
# classifier = RandomForestClassifier(n_estimators = 10, criterion = 'entropy')
# classifier.fit(X_train, y_train)

# y_pred = classifier.predict(X_test) 
# y_pred

# from sklearn.metrics import confusion_matrix
# cm = confusion_matrix(y_test, y_pred)
# from sklearn.metrics import accuracy_score 
# print ("Accuracy : ", accuracy_score(y_test, y_pred))
# cm

# df = pd.DataFrame({'Real Values':y_test, 'Predicted Values':y_pred})
# df

# # pickle.dump(classifier,open('model2.pkl','wb'))
# # model1=pickle.load(open('model2.pkl','rb'))


# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score, classification_report
# from sklearn.ensemble import RandomForestRegressor

# random_model = RandomForestRegressor(n_estimators=300, random_state = 42, n_jobs = -1)


# # X_train, X_test, y_train, y_test = train_test_split(fin.iloc[:, :500], y, test_size=0.3, random_state=0)

# #Fit
# random_model.fit(X_train, y_train)

# y_pred = random_model.predict(X_test)

# #Checking the accuracy
# random_model_accuracy = round(random_model.score(X_train, y_train)*100,2)
# print(round(random_model_accuracy, 2), '%')

# #Checking the accuracy
# random_model_accuracy1 = round(random_model.score(X_test, y_test)*100,2)
# print(round(random_model_accuracy1, 2), '%')

# saved_model = pickle.dump(random_model, open('ForestModelOld.pickle','wb'))

# random_model.get_params()

# from sklearn.model_selection import RandomizedSearchCV

# n_estimators = [int(x) for x in np.linspace(start = 300, stop = 500, num = 20)]

# max_features = ['auto', 'sqrt']

# max_depth = [int(x) for x in np.linspace(15, 35, num = 7)]
# max_depth.append(None)

# min_samples_split = [2, 3, 5]
# min_samples_leaf = [1, 2, 4]

# random_grid = {'n_estimators': n_estimators,
#                'max_features': max_features,
#                'max_depth': max_depth,
#                'min_samples_split': min_samples_split,
#                'min_samples_leaf': min_samples_leaf,
#                 }

# rf_random = RandomizedSearchCV(estimator = random_model, param_distributions = random_grid, n_iter = 50, cv = 3, verbose=2, random_state=42)

# rf_random.fit(X_train, y_train)

# rf_random.best_params_

# random_new = RandomForestRegressor(n_estimators = 394, min_samples_split = 2, min_samples_leaf = 1, max_features = 'sqrt',
#                                       max_depth = 25, bootstrap = True)

# random_new.fit(X_train, y_train)

# y_pred1 = random_new.predict(X_test)

# random_model_accuracy1 = round(random_new.score(X_train, y_train)*100,2)
# print(round(random_model_accuracy1, 2), '%')

# random_model_accuracy2 = round(random_new.score(X_test, y_test)*100,2)
# print(round(random_model_accuracy2, 2), '%')

# saved_model = pickle.dump(random_new, open('ForestModel.pickle','wb'))

# with open('ForestModel.pickle', 'wb') as f:
#     pickle.dump(random_new, f)

# with open('ForestModel.pickle', 'rb') as f:
#     data = pickle.load(f)

# import bz2

# compressionLevel = 9
# source_file = 'ForestModel.pickle' # this file can be in a different format, like .csv or others...
# destination_file = 'ForestModel.bz2'

# with open(source_file, 'rb') as data:
#     tarbz2contents = bz2.compress(data.read(), compressionLevel)
    
# fh = open(destination_file, "wb")
# fh.write(tarbz2contents)
# fh.close()