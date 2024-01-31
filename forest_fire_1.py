import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import warnings
import pickle
warnings.filterwarnings("ignore")

import math      


forest = pd.read_csv("fire_archive.csv")

# forest = np.array(forest)

forest = forest.drop(['track'], axis = 1)

forest = forest.drop(['instrument', 'version'], axis = 1)

daynight_map = {"D": 1, "N": 0}
satellite_map = {"Terra": 1, "Aqua": 0}

forest['daynight'] = forest['daynight'].map(daynight_map)
forest['satellite'] = forest['satellite'].map(satellite_map)

types = pd.get_dummies(forest['type'])
forest = pd.concat([forest, types], axis=1)

forest = forest.drop(['type'], axis = 1)

forest = forest.rename(columns={0: 'type_0', 2: 'type_2', 3: 'type_3'})

bins = [0, 1, 2, 3, 4, 5]
labels = [1,2,3,4,5]
forest['scan_binned'] = pd.cut(forest['scan'], bins=bins, labels=labels)

forest['acq_date'] = pd.to_datetime(forest['acq_date'])

forest = forest.drop(['scan'], axis = 1)

forest['year'] = forest['acq_date'].dt.year
forest['month'] = forest['acq_date'].dt.month
forest['day'] = forest['acq_date'].dt.day

y = forest['confidence']
fin = forest.drop(['confidence', 'acq_date', 'acq_time', 'bright_t31', 'type_0'], axis = 1)

# X_train, X_test, ytrain, ytest = train_test_split(fin.iloc[:, :500], y, test_size=0.2)
X_train, X_test, y_train, y_test = train_test_split(fin.iloc[:, :500], y, test_size=0.3, random_state=0)


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

# pickle.dump(classifier,open('model2.pkl','wb'))
# model1=pickle.load(open('model2.pkl','rb'))


from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from sklearn.ensemble import RandomForestRegressor

random_model = RandomForestRegressor(n_estimators=300, random_state = 42, n_jobs = -1)


# X_train, X_test, y_train, y_test = train_test_split(fin.iloc[:, :500], y, test_size=0.3, random_state=0)

#Fit
random_model.fit(X_train, y_train)

y_pred = random_model.predict(X_test)

#Checking the accuracy
random_model_accuracy = round(random_model.score(X_train, y_train)*100,2)
print(round(random_model_accuracy, 2), '%')

#Checking the accuracy
random_model_accuracy1 = round(random_model.score(X_test, y_test)*100,2)
print(round(random_model_accuracy1, 2), '%')

saved_model = pickle.dump(random_model, open('ForestModelOld.pickle','wb'))

random_model.get_params()

from sklearn.model_selection import RandomizedSearchCV

n_estimators = [int(x) for x in np.linspace(start = 300, stop = 500, num = 20)]

max_features = ['auto', 'sqrt']

max_depth = [int(x) for x in np.linspace(15, 35, num = 7)]
max_depth.append(None)

min_samples_split = [2, 3, 5]
min_samples_leaf = [1, 2, 4]

random_grid = {'n_estimators': n_estimators,
               'max_features': max_features,
               'max_depth': max_depth,
               'min_samples_split': min_samples_split,
               'min_samples_leaf': min_samples_leaf,
                }

rf_random = RandomizedSearchCV(estimator = random_model, param_distributions = random_grid, n_iter = 50, cv = 3, verbose=2, random_state=42)

rf_random.fit(X_train, y_train)

rf_random.best_params_

random_new = RandomForestRegressor(n_estimators = 394, min_samples_split = 2, min_samples_leaf = 1, max_features = 'sqrt',
                                      max_depth = 25, bootstrap = True)

random_new.fit(X_train, y_train)

y_pred1 = random_new.predict(X_test)

random_model_accuracy1 = round(random_new.score(X_train, y_train)*100,2)
print(round(random_model_accuracy1, 2), '%')

random_model_accuracy2 = round(random_new.score(X_test, y_test)*100,2)
print(round(random_model_accuracy2, 2), '%')

saved_model = pickle.dump(random_new, open('ForestModel.pickle','wb'))

with open('ForestModel.pickle', 'wb') as f:
    pickle.dump(random_new, f)

with open('ForestModel.pickle', 'rb') as f:
    data = pickle.load(f)

import bz2

compressionLevel = 9
source_file = 'ForestModel.pickle' # this file can be in a different format, like .csv or others...
destination_file = 'ForestModel.bz2'

with open(source_file, 'rb') as data:
    tarbz2contents = bz2.compress(data.read(), compressionLevel)
    
fh = open(destination_file, "wb")
fh.write(tarbz2contents)
fh.close()