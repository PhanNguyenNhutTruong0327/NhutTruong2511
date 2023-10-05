<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\OrderdetailController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('brand')->group(function(){
    Route::get('index/{status?}',[BrandController::class,'index']);
    Route::get('show/{id}',[BrandController::class,'show']);
    Route::post('store',[BrandController::class,'store']);
    Route::post('update/{id}',[BrandController::class,'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);
});

Route::prefix('category')->group(function(){
    Route::get('index',[CategoryController::class,'index']);
    Route::get('show/{id}',[CategoryController::class,'show']);
    Route::post('store',[CategoryController::class,'store']);
    Route::post('update/{id}',[CategoryController::class,'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);

    Route::get('category_list/{parent_id?}/{limit?}', [CategoryController::class, 'category_list']);

});

Route::prefix('product')->group(function(){
    Route::get('index/{status?}',[ProductController::class,'index']);
    Route::get('ProductNew/{sale}/{limit}',[ProductController::class,'ProductNew']);
    Route::get('show/{id}',[ProductController::class,'show']);
    Route::post('store',[ProductController::class,'store']);
    Route::post('update/{id}',[ProductController::class,'update']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);

    Route::get('product_brand/{brand_id}/{limit}', [ProductController::class, 'product_brand']);
    Route::get('product_category/{category_id}/{limit}',[ProductController::class,'product_category']);
    Route::get('product_home/{category_id?}/{limit?}/{orderby?}', [ProductController::class, 'product_home']);
    Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
    Route::get('search_product/{key}/{limit}', [ProductController::class, 'search_product']);
    Route::get('product_all/{limit}/{page?}', [ProductController::class, 'getProductAll']);



});


Route::prefix('contact')->group(function(){
    Route::get('index',[ContactController::class,'index']);
    Route::get('show/{id}',[ContactController::class,'show']);
    Route::post('store',[ContactController::class,'store']);
    Route::post('addcontact',[ContactController::class,'addcontact']);
    Route::post('update/{id}',[ContactController::class,'update']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
});

Route::prefix('menu')->group(function(){
    Route::get('index',[MenuController::class,'index']);
    Route::get('show/{id}',[MenuController::class,'show']);
    Route::post('store',[MenuController::class,'store']);
    Route::post('update/{id}',[MenuController::class,'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
    Route::get('getByParentId/{position}/{parent_id}', [MenuController::class, 'getByParentId']);
});

Route::prefix('order')->group(function(){
    Route::get('index',[OrderController::class,'index']);
    Route::get('show/{id}',[OrderController::class,'show']);
    Route::post('store',[OrderController::class,'store']);
    Route::post('update/{id}',[OrderController::class,'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
});

Route::prefix('post')->group(function(){
    Route::get('index',[PostController::class,'index']);
    Route::get('show/{id}',[PostController::class,'show']);
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);

    // frontend
    Route::get('post_all_fe',[PostController::class,'getPostFE']);
    Route::get('post_detail/{slug}',[PostController::class,'post_detail']);
    Route::get('post_topic/{topicid}/{limit}',[PostController::class,'post_topic']);

});


Route::prefix('slider')->group(function(){
    Route::get('index',[SliderController::class,'index']);
    Route::get('getSliderMain/{position}',[SliderController::class,'getSliderMain']);
    Route::get('show/{id}',[SliderController::class,'show']);
    Route::post('store',[SliderController::class,'store']);
    Route::post('update/{id}',[SliderController::class,'update']);
    Route::delete('destroy/{id}', [SliderController::class, 'destroy']);
    Route::get('slider_list/{position}', [SliderController::class, 'slider_list']);
});

Route::prefix('topic')->group(function(){
    Route::get('index',[TopicController::class,'index']);
    Route::get('show/{id}',[TopicController::class,'show']);
    Route::post('store',[TopicController::class,'store']);
    Route::post('update/{id}',[TopicController::class,'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);

    Route::get('list_topic/{parent_id}', [TopicController::class, 'list_topic']);

});



Route::prefix('user')->group(function(){
    Route::get('index',[UserController::class,'index']);
    Route::get('show/{id}',[UserController::class,'show']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);

    Route::post('adduser', [UserController::class, 'AddUser']);
    Route::post('login', [UserController::class, 'Login']);

});


Route::prefix('member')->group(function(){
    Route::get('list',[UserController::class,'getMemberAll']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);
});



Route::prefix('page')->group(function(){
    Route::get('getPage',[PostController::class,'getPage']);
    Route::get('show/{id}',[PostController::class,'show']);
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
});
