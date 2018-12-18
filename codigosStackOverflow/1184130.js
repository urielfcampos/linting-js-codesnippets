var data = {
    'PropertyA': 1,
    'PropertyB': 2,
    'PropertyC': 3
};

data["PropertyD"] = 4;

// dialog box with 4 in it
alert(data.PropertyD);
alert(data["PropertyD"]);