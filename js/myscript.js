const URL="https://api.rootnet.in/covid19-in/stats/latest";
let app=angular.module("MyApp",[]);

app.controller("MyCtrl",($scope,$http)=>{
    $scope.title="Stay Home Stay Safe";
    console.log("APP Loaded");

 $http.get(URL).then(
     (response)=>{
     console.log("Inside Success");
     console.log(response.data);

     $scope.all_data = response.data;

 },
 (error)=>{
     console.log(error);
 }
 );
 $scope.get_c_data=()=>{
    let country = $scope.c;
    if (country==""){
        $scope.c_data=undefined;
        return;
    }
    $http.get(`${URL}/countries/${country}`)
    .then((response)=>{
        console.log(response.data);
        $scope.c_data=response.data;

    },(error)=>{
        console.log(error);

    });
};
});
        
       