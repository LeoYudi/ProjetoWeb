from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/login', methods=['POST', 'GET'])
def login():
  if request.method == 'POST':
    user = request.form['nm']
    return render_template('home.html', data=user)

  else:
    return render_template('login/login.html')


if __name__ == '__main__':
  app.run(debug=True)
