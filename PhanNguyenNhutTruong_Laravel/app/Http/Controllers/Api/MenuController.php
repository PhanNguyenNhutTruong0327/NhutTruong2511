<?php

namespace App\Http\Controllers\Api;
use App\Models\Menu;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(){
        $menus = Menu::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'menus'=>$menus],200);
    }
    
    /*lay bang id -> chi tiet */
    public function show($id){
        $menu = Menu::find($id);
        if ($menu==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'menu' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'menu'=>$menu],200);
    }
    
    // add
    public function store(Request $request){
        $menu = new Menu();
        $menu->name = $request->name; 
        $menu->link = $request->link; 
        $menu->position = $request->position;
        $menu->level = $request->level; 
        $menu->table_id = $request->table_id; 
        $menu->type = $request->type; 
        $menu->sort_order = $request->sort_order; 
        $menu->parent_id = $request->parent_id; 
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; 
        $menu->save();
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'menu' => $menu],201); 
    }
    
    /*update*/

    public function update(Request $request,$id){
        $menu = Menu::find($id);
        $menu->name = $request->name; 
        $menu->link = $request->link; 
        $menu->position = $request->position;
        $menu->level = $request->level; 
        $menu->table_id = $request->table_id; 
        $menu->type = $request->type; 
        $menu->sort_order = $request->sort_order; 
        $menu->parent_id = $request->parent_id; 
        $menu->created_at = date('Y-m-d H:i:s');
        $menu->created_by = 1;
        $menu->status = $request->status; 
        $menu->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'menu' => $menu],200);
    }
    
    //  delete
    public function destroy($id){
        $menu = Menu::find($id);
        $menu->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'menu' => null],200);
    }

    

}
