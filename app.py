from flask import Flask,render_template,request,jsonify
import pickle
import numpy as np


app = Flask(__name__)
model=pickle.load(open('model.pkl','rb'))


@app.route('/')
def home():
    return render_template('forest.html')

@app.route('/predict',methods=['POST','GET'])
def predict():
    print(request.form)
    int_features=[int(x) for x in request.form.value()]
    final=[np.array(int_features)]
    print(int_features)
    print(final)
    prediction=model.predict(final)
    output='{0:.{1}f}'.format(prediction[0][1], 2)

    if output>str(0.5):
        return render_template('forest.html', pred='Forest is in Danger. \nProbability of fire is {}'.format(output))
    else:
        return render_template('forest.html', pred='Forest is in Safe. \nProbability of fire is {}'.format(output))

if __name__ == '__main__':
    app.run()