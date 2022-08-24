<!doctype html>
<html lang="en">
<head>
    <title>Lab1</title>
    <script src="script.js"></script>
</head>
<body>
<form method="post" id="processor">
    <input type="text" name="processor" placeholder="Процессор">
    <input type="submit"><br>
</form>
<br>
<form method="post" id="software">
    <select name="software">
        <option value="Google Chrome">Google Chrome</option>
        <option value="Opera">Opera</option>
        <option value="Firefox">Firefox</option>
    </select>
    <input type="submit"><br>
</form>
<br>
<form method="post" id="guarantee">
    <input hidden name="guarantee">
    <input type="submit" value="Перевірити гарантію"><br>
</form>
<br>
<div id="content">

</div>
</body>
</html>

