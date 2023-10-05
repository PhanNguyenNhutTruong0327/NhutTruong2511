<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str; 

class CategoryController extends Controller
{
     /*lay danh sach thuong hieu*/
     public function index(){
        $categories = Category::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'categoies'=>$categories],200);
        
    }

    // tim id
    public function show($id){
        if(is_numeric($id)){
            $category = Category::find($id);
        }
        else{
            $category = Category::where('slug','=',$id)->first();
        }
        if ($category==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'category' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'category'=>$category],200);
    } 

    // add
    public function store(Request $request){
        $category = new Category();
        $category->name = $request->name;
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; 
        $category->metakey = $request->metakey; 
        $category->metadesc = $request->metadesc; 
        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status;
        $category->save();
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $category],201); 
    }

    // update
    
    public function update(Request $request,$id){
        $category = Category::find($id);
        $category->name = $request->name;
        $category->slug = Str::of($request->name)->slug('-');
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('images/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; 
        $category->metakey = $request->metakey; 
        $category->metadesc = $request->metadesc; 
        $category->updated_at = date('Y-m-d H:i:s');
        $category->updated_by = 1;
        $category->status = $request->status; 
        $category->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'category' => $category],200);
    }

    // delete 
    public function destroy($id){
        $category = Category::findOrFail($id);
        if($category == null){
            return response()->json(['success'=>false,'message'=>"Không tìm thấy dữ liệu"],404);
        }
        else{
            $category->delete();
            return response()->json(['success'=>true,'message'=>"Xóa dữ liệu thành công"],200);
        }
    }

    // lay cat 
    public function category_list($parent_id = 0,$limit){
        $args = [
            ['parent_id','=',$parent_id],
            ['status','=',1]
        ];
        $categories = Category::where($args)->orderBy('sort_order','ASC')->limit($limit)->get();
        return response()->json( ['success' => true,'message' => 'Tải dữ liệu thành công', 'categories' => $categories],200);
    }
}
