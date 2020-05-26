<?php

use Illuminate\Database\Seeder;

class ProductoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('productos')->insert([
            'name'=>"producto1",
            'referencia'=>"producto1",
            'precio'=>10,
            'peso'=>50,
            'categoria'=>"productos",
            'stock'=>10]);
    }
}
