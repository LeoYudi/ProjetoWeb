from flask import Flask, render_template, request, redirect, session, url_for, abort

app = Flask(__name__)
app.secret_key = 'chave secreta'


@app.route('/login', methods=['POST', 'GET'])
def login():
  if request.method == 'POST':
    user = request.form['email']
    if user == 'admin':
      session['username'] = user
      return render_template('home.html', data=user)
    else:
      abort(401)

  else:
    return render_template('login/login.html')


@app.route('/', methods=['GET'])
def home():
  try:
    return render_template('home.html', data=session['username'])
  except:
    return redirect(url_for('login'))


@app.route('/logout')
def logout():
  session.pop('username', None)
  return redirect(url_for('login'))


if __name__ == '__main__':
  app.run(debug=True)
