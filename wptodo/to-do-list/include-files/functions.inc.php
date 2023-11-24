<?php

class dataBaseBridge{
    public function dbConnect(){
        static $pdo;
        if(! isset($pdo)){
            $config = parse_ini_file('configure.ini');
            try{    
                $dsn = "mysql:host={$config['host']};port={$config['db_port']};dbname={$config['db_name']}"; 
                $pdo = new PDO($dsn, $config['username'], $config['password']);
            }   catch(PDOException $e){
                return $e->getMessage();
            }
        }


        return $pdo;
    }

    public function dbQuery($query){
        $pdo = $this->dbConnect();
        try{
            $pdo->exec($query);
        }   catch(PDOException $e){
            return false;
        } 
        return true;
    }

    public function dbError(){
        $pdo = $this->dbConnect();
        $error = $pdo->errorInfo();
        var_dump($error);
        if($error[1] !== null){
            return $error;
        }
        else{
            return "No Errors Found";
        }
    }

    public function dbSelect($query){
        $pdo = $this->dbConnect();
        try{
            $stmt = $pdo->query($query);
            $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        }   catch(PDOException $e){
            return false;
        }
        
        return $data;
    }

    public function getLastId(){
        $pdo = $this->dbConnect();
        return $pdo->lastInsertId();
    }

}

function dd($data){
    die(var_dump($data)); #This is an inbuilt function of laravel...
}

function changeDateFormat($d, $format="Y-m-d"){
    return date($format, strtotime($d));
}

function getOldValue($data, $key, $default_value = ""){
    if(isset($data[$key])){
        return $data[$key];
    }
    else return $default_value;
}

function redirect($url){
    header("Location: $url");
}

?>