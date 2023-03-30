function openPopup() {
    var now = new Date();
    var popupName = "myPopup" + now.getTime();
    var popup = window.open("", popupName, "width=500,height=500");
    popup.document.write("<form>");
    popup.document.write("<label for='name'>Name:</label><br>");
    popup.document.write("<input type='text' id='name' name='name'><br><br>");
    popup.document.write("<label for='availability'>Availability:</label><br>");
    popup.document.write("<input type='text' id='availability' name='availability'><br><br>");
    popup.document.write("<label for='profession'>Profession:</label><br>");
    popup.document.write("<input type='text' id='profession' name='profession'><br><br>");
    popup.document.write("<input type='submit' value='Submit' onclick='window.close();'>");
    popup.document.write("</form>");
}
