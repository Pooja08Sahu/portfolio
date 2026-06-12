<?php
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];

$conn = mysqli_connect("localhost", "root", "", "portfolio");
 
$ins = "insert into contact (name, email, mobile, message) 
values ('$name','$email','$mobile','$message')";

$res = mysqli_query($conn,$ins);
if($res){
    echo "<script>
    alert('Form successfully submitted!');
    window.location.href='index.php';
    </script>";
}
else{
    echo "<script>alert('Try again')</script>";
}

?>