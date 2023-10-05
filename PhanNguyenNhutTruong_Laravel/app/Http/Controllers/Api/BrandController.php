<?php

namespace App\Http\Controllers\Api;
use App\Models\Brand;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 


class BrandController extends Controller
{
     /*lay danh sach thuong hieu*/
     public function index($status = null){
        if($status == null){
            $brands = Brand::all();
        }
        else{
            $brands = Brand::where('status',$status)->get();
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brands'=>$brands],200);
    }

    // lấy theo id or slug
    public function show($id){
        if(is_numeric($id)){
            $brand = Brand::find($id);
        }
        else{
            $brand = Brand::where('slug','=',$id)->first();
        }
        if ($brand==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'brand' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'brand'=>$brand],200);
    }

    // thêm 
    public function store(Request $request){
        $brand = new Brand();
        $brand->name = $request->name; 
        $brand->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension(); 
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }        
        $brand->sort_order = $request->sort_order; 
        $brand->metakey = $request->metakey; 
        $brand->metadesc = $request->metadesc; 
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1;
        $brand->status = $request->status; 
        $brand->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $brand],201); 
    }

    // update
    public function update(Request $request,$id){
        $brand = Brand::find($id);
        $brand->name = $request->name; 
        $brand->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('images/brand'), $filename);
            }
        }
        $brand->sort_order = $request->sort_order; 
        $brand->metakey = $request->metakey; 
        $brand->metadesc = $request->metadesc; 
        $brand->updated_at = date('Y-m-d H:i:s');
        $brand->updated_by = 1;
        $brand->status = $request->status; 
        $brand->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $brand],200);
    }

    // delete
    public function destroy($id){
        $brand = Brand::findOrFail($id);
        if ($brand==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'brand' => null],404
            );
        }
         
        $brand->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'brand' => null],200);
    }

        
    

}
