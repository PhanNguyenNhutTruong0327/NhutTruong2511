<?php

namespace App\Http\Controllers\Api;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
     public function index(){
        $contacts = Contact::all();
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contacts'=>$contacts],200);
    }

    /*lay bang id -> chi tiet */
    public function show($id){
        $contact = Contact::find($id);
        if ($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contact' => null],404
            );
        }
        return response()->json(['success'=>true,'message'=>"Tải dữ liệu thành công",'contact'=>$contact],200);
    }

    /* them */
    public function store(Request $request){
        $contact = new Contact();
        $contact->user_id = $request->user_id;
        $contact->name = $request->name; 
        $contact->email = $request->email; 
        $contact->phone = $request->phone; 
        $contact->title = $request->title; 
        $contact->content = $request->content; 
        $contact->replay_id = $request->replay_id; 
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; 
        $contact->save(); 
        return response()->json(['success' => true, 'message' => 'Thêm thành công', 'data' => $contact],201); 
    }
/* add form frontend*/
    public function addcontact(Request $request){
        $contact = new Contact();
        $contact->user_id = $request->user_id;
        $contact->name = $request->name; 
        $contact->email = $request->email; 
        $contact->phone = $request->phone; 
        $contact->title = $request->title; 
        $contact->content = $request->content; 
        $contact->replay_id = $request->replay_id; 
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; 
        $contact->save(); 
        return response()->json(['success' => true, 'message' => 'Cảm ơn câu hỏi của bạn.', 'data' => $contact],201); 
}

    /*update*/

    public function update(Request $request,$id){
        $contact = Contact::find($id);
        $contact->user_id = $contact->user_id;
        $contact->name = $request->name; 
        $contact->email = $request->email; 
        $contact->phone = $request->phone; 
        $contact->title = $request->title; 
        $contact->content = $request->content; 
        $contact->replay_id = $request->replay_id; 
        $contact->created_at = date('Y-m-d H:i:s');
        $contact->created_by = 1;
        $contact->status = $request->status; 
        $contact->save(); 
        return response()->json(['success' => true, 'message' => 'Cập nhật thành công', 'data' => $contact],200);
    }

    /* delete */

    public function destroy($id){
        $contact = Contact::find($id);
        if ($contact==null){
            return response()->json(
                ['success' => false, 'message' => 'Tải dữ liệu không thành công', 'contact' => null],404
            );
        }

        $contact->delete();
        return response()->json(['success' => true, 'message' => 'Xóa thành công', 'contact' => null],200);
    }
}
