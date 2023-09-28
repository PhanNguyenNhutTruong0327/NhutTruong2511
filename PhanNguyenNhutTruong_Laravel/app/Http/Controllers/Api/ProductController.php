<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        $product = Product::find($id);
        if ($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'product'=>$product],200);
    }
    

    /* them */
    public function store(Request $request){
        $product = new Product();
        $product->category_id = $request->category_id; 
        $product->brand_id = $request->brand_id;  
        $product->name = $request->name; 
        $product->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
         if ($files != null) {
             $extension = $files->getClientOriginalExtension();
             if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                 $filename = $product->slug . '.' . $extension;
                 $product->image = $filename;
                 $files->move(public_path('images/product'), $filename);
             }
         }
        $product->price = $request->price; 
        $product->price_sale = $request->price_sale; 
        $product->qty = $request->qty;
        $product->detail = $request->detail;
        $product->metakey = $request->metakey;
        $product->metadesc = $request->metadesc; 
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status;
        $product->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $product],201); 
    }

    /*update*/
    public function update(Request $request,$id){
        $product = Product::find($id);
        $product->category_id = $request->category_id; 
        $product->brand_id = $request->brand_id; 
        $product->name = $request->name; 
        $product->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        //
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('images/product'), $filename);
            }
        }
        //
        $product->price = $request->price;
        $product->price_sale = $request->price_sale;
        $product->qty = $request->qty;
        $product->detail = $request->detail;
        $product->metakey = $request->metakey; 
        $product->metadesc = $request->metadesc; 
        $product->created_at = date('Y-m-d H:i:s');
        $product->created_by = 1;
        $product->status = $request->status; 
        $product->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $product],200);
    }

    /* xoa */
    public function destroy($id){
        $product = Product::find($id);
        if ($product==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'product' => null],404
            );
        }

        $product->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'product' => null],200);
    }



}
