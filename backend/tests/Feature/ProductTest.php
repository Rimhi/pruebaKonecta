<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Producto;
class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testGetProducto()
    {
        $producto = factory(Producto::class,5)->create();
        $response = $this->json('GET','/api/producto');

        $response->assertStatus(200)->assertJsonStructure(
            'id','name','referencia','precio','peso','stock'
        );
        $this->assertCount(5,$response->json()['productos'])
    }
}
