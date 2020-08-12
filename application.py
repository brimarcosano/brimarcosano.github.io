from flask import Flask, flash, render_template, request, redirect

app =  Flask(__name__)

ButtonPressed = 0
@app.route("/contact", methods=["GET", "POST"])
def contact():
    """Contact owner"""

    if request.method == 'POST':
        message = request.args.get("msg")jj
        return render_template("contact.html", msg=msg)
    return render_template("contact.html")

