<?php

namespace App\Http\Controllers\Api;
use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 

class ProductController extends Controller
{
    public function index($status=null){
        if($status != null){
            $products = Product::where('status','=',$status) -> orderBy('created_at','DESC') -> get();
        }
        else{
            $products = Product::all();
        }
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
        $product->sale = $request->sale; 
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
        $product->sale = $request->sale; 
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


    // all sp fe
    public function getProductAll($limit, $page = 1){
        $offset = ($page - 1) * $limit;
        $products = Product::where('status', 1)->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success'=>true,'message'=>'Tải dữ liệu thành công','products'=>$products],200);
    }

    // sp moi - sp sale
    public function ProductNew($sale=0,$limit){
        $arg = [
            ['sale','=',$sale],
            ['status','=',1]
        ];
        $products = Product::where($arg)->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'products'=>$products],200);
    }

    // sp theo danh muc
    // public function getProductByCategory($category_id,$limit){
    //     $agr = array();
    //     array_push($agr,$category_id + 0);
    //     $agr_cat1 = [
    //         ['parent_id','=', $category_id + 0],
    //         ['status','=',1]
    //     ];
    //     $list_category = Category::where($agr_cat1)->get();
    //     if(count($list_category) > 0){
    //         foreach ($list_category as $values) {
    //             array_push($agr,$values -> id);
    //             $agr_cat2 = [
    //                 ['parent_id','=',$values->id],
    //                 ['status','=',1]
    //             ];
    //             $list_category2 = Category::where($agr_cat2)->get();
    //             if (count($list_category2) > 0) {
    //                 foreach ($list_category2 as $row2){
    //                     array_push($agr, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //     $products = Product::where('status', 1)->whereIn('category_id', $agr)->orderBy('created_at', 'DESC')->limit($limit)->get();
    //     return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','products' => $products],200);
    // }

    // sp home
    public function product_home($category_id=0,$limit,$orderby){

        $listid = array();
        array_push($listid,$category_id + 0);
        $args_cat1=[
            ['parent_id','=',$category_id + 0],
            ['status','=',1]
        ];
        $list_category1=Category::where($args_cat1)->get();
        if(count($list_category1) > 0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2=[
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }    
            }
        }
        $products=Product::where('status','=',1)->whereIn('category_id',$listid)->orderBy('created_at',$orderby)->limit($limit)->get();
        if (count($products)>0){
            return response()->json(['success'=>true,'message'=>'Tải dữ liệu thành công','products'=>$products],200);
        }
        else{
            return response()->json(['success'=>false,'message'=>'Không có dữ liệu','products'=> null ],404);
        }
        
    }

    // chi tiet + sp lien quan
    public function product_detail($id){
        $product = Product::where([['id','=',$id],['status','=',1]])->first();
        if($product == null){
            return response()->json(['success' => false,'message' => 'Không tìm thấy dữ liệu','product' => null],404);
        }
        $listid = array();
        array_push($listid,$product->category_id);
        $args_cat1=[
            ['parent_id','=',$product->category_id],
            ['status','=',1]
        ];
        $list_category1=Category::where($args_cat1)->get();
        if(count($list_category1)>0){
            foreach($list_category1 as $row1){
                array_push($listid,$row1->id);
                $args_cat2=[
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }    
            }
        }
        $product_other = Product::where([['id','!=',$product->id],['status','=',1]])->whereIn('category_id',$listid)->orderBy('created_at','DESC')->limit(4)->get();

        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','product' => $product,'product_other'=>$product_other],200);
    }


    // lay sp theo loai phan trang
    public function product_category($category_id, $limit){
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1){
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2){
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $products = Product::where('status', 1)->whereIn('category_id', $listid)->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công','products' => $products],200);
    }

    // sp theo thuong hieu
    public function product_brand($product_id, $limit, $page = 1){
        $offset = ($page - 1) * $limit;
        $products = Product::where([['brand_id', '=', $product_id], ['status', '=', 1]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products],200);
    }

    // tim kiem sp
    public function search_product($key,$limit, $page = 1){
        $offset = ($page - 1) * $limit;
        $products = Product::where([['name', 'like','%'.$key.'%'], ['status', '=', 1]])->orderBy('created_at', 'DESC')->offset($offset)->limit($limit)->get();
        return response()->json(['success' => true,'message' => 'Tải dữ liệu thành công','products' => $products],200);

    }


}
