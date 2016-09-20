<?php namespace App\Http\Controllers\TextEdit;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use \App\Models\Others;

class TextEditController extends Controller {
	

    
    public function getText($type){
        $text = Others::where('type',$type)->get();
        return response($text);
	} 
	public function deleteText($id){
		$text = Others::find($id);
		$type = $text->type; 
		$text->delete();
		
		$text = Others::where('type', $type)->get();
        return response($text);
	} 
	
	public function setText(Request $request){
        
		if($request->input('type')=='words'  && $request->input('id')===null){
			$text = new Others();
			$text->name = $request->input('name');
			$text->type = $request->input('type');
					  $mylink = preg_replace('~[^\pL\d]+~u', '-', $request->input('name'));
		  $mylink = iconv('utf-8', 'us-ascii//TRANSLIT', $mylink);
		  $mylink = preg_replace('~[^-\w]+~', '', $mylink);
		  $mylink = trim($mylink, '-');
		  $mylink = preg_replace('~-+~', '-', $mylink);
		  $mylink = strtolower($mylink);
		$text->link = $mylink;
			$text -> save();
			
			
			$text = Others::where('type','words')->get();
			return response($text,200);
		}
		
		if($request->input('type')=='words'){
			
			$text =  Others::find($request->input('id'));
			$text->type = $request->input('type');
			$text->name = $request->input('name');
			$text->text = $request->input('text');
				 $mylink = preg_replace('~[^\pL\d]+~u', '-', $request->input('name'));
		  $mylink = iconv('utf-8', 'us-ascii//TRANSLIT', $mylink);
		  $mylink = preg_replace('~[^-\w]+~', '', $mylink);
		  $mylink = trim($mylink, '-');
		  $mylink = preg_replace('~-+~', '-', $mylink);
		  $mylink = strtolower($mylink);
		$text->link = $mylink;
			$text -> save();
			
			$text = Others::where('type','words')->get();
			
			return response($text,200);
			
		}
		
		if($request->input('id') === null){
			$text = new Others();
			$text->type = $request->input('type');
			$text->text = $request->input('text');
			$text -> save();
			
			$text = Others::where('type',$request->input('type'))->get();
			
			return response($text,200);
			
		}
		
		
		$text =  Others::find($request->input('id'));
       	$text->name = $request->input('name');
		$text->text = $request->input('text');

		$text -> save();
		
		
		return response("success",200);
    }
    
    function getWords($link){
		return response(Others::where('link', $link)->select('text')->get(),200);
	}  
}