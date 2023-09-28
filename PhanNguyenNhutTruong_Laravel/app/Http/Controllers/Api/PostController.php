<?php

namespace App\Http\Controllers\Api;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Support\Str; 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){
        $posts = Post::where('type','=','post')->get();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'posts'=>   $posts],200);
    }
            
    /*lay bang id -> chi tiet */
    public function show($id){
        if(is_numeric($id)){
            $post = Post::find($id);
        }
        else{
            $post = Post::where('slug','=',$id)->first();
        }
            if ($post==null){
                return response()->json(
                    ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'post' => null],404
                );
            }
            return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'post'=>$post],200);
        }
            
    /* add */
    public function store(Request $request){
        $post = new Post();
        $post->topic_id = $request->topic_id; 
        $post->title = $request->title; 
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; 
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $post->type = $request->type; 
        $post->metakey = $request->metakey; 
        $post->metadesc = $request->metadesc; 
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; 
        $post->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' =>    $post],201); 
    }
            
    /*update*/
    public function update(Request $request,$id){
        $post = Post::find($id);
        $post->topic_id = $request->topic_id; 
        $post->title = $request->title; 
        $post->slug = Str::of($request->title)->slug('-');
        $post->detail = $request->detail; 
        $files = $request->image;
        if ($files != null) {
        $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('images/post'), $filename);
            }
        }
        $post->type = $request->type; 
        $post->metakey = $request->metakey; 
        $post->metadesc = $request->metadesc; 
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; 
        $post->save();
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'post' =>    $post],200);
    }
            
    /* xoa */
    public function destroy($id){
        $post = Post::find($id);
        if ($post==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'post' => null],404
            );
        }
        $post->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'post' => null],200);
    }
    
    

}
