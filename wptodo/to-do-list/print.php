<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Printed Form Data</title>
</head>
<body>
    <h2>Printed Form Data</h2>
    <ul>
        <li><strong>Name:</strong> <?php echo $_POST['username']; ?></li>
        <li><strong>Task Name:</strong> <?php echo $_POST['name']; ?></li>
        <li><strong>Task Priority:</strong> <?php echo $_POST['priority']; ?></li>
        <li><strong>Task Category:</strong> <?php echo $_POST['category']; ?></li>
        <li><strong>Task Color:</strong> <?php echo $_POST['color']; ?></li>
        <li><strong>Task Completion Date:</strong> <?php echo $_POST['completion']; ?></li>
        <li><strong>Task Reminder Date:</strong> <?php echo $_POST['reminder']; ?></li>
        <li><strong>Task Description:</strong> <?php echo $_POST['description']; ?></li>
    </ul>
</body>
</html>
