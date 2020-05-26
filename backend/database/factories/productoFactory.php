<?php

use Faker\Generator as Faker;

$factory->define(App\Producto::class, function (Faker $faker) {
    return [
        "name"=>$faker->text($maxNbChars=200),
        "referencia"=>$faker->text($maxNbChars=200),
        "precio"=>$faker->numberBetween($min = 1000 ,$max=100000),
        "peso"=>$faker->numberBetween($min = 1 ,$max=100),
        "stock"=>$faker->numberBetween($min = 1 ,$max=100),
    ];
});
