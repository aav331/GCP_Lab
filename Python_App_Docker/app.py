from flask import Flask           # import flask
app = Flask(__name__)             # create an app instance

@app.route("/")                   # at the end point /
def homepage():
    return """
    <h1>Welcome To GCP</h1>
    <img src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png">
    """ 
    
if __name__ == "__main__":        # on running python app.py
    app.run(debug=True)  