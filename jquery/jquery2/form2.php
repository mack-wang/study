<?php
$name = $_POST["name"];
$age = $_POST["age"];
if ($name){
    echo "我已经收到了你传递的数据：".$name."和".$age;
}