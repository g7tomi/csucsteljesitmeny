<?php namespace App\Http\Controllers\TextEdit;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use \App\Models\Series;
use \App\Models\Image;
use Validator;
use ImageManager;
use DB;
use File;
class SeriesController extends Controller {
	
	public function getAllSeries(){
			$series = Series::all();
			return response($series);
		}
	public function getAvailables(){
		
		$images = Image::where('sold',0)->where('show', 1)->get();
		
		return response()->json($images);
			}
	public function getSeries($series){
		$myseries = Series::where('link',$series)->first();
		
		if($myseries->id!= null){
		$images = Image::where('series_id',$myseries->id) ->where('show', 1)->get();
		return response()->json($images);
		}
		else{
			return response("content not found",403);
		}
	}
	public function getHomePicture(){
		$image = Image::where('home',1)->first();
		return response()->json($image);
	}
	
	public function setHomePicture($id){
			$image = Image::where('home',1)->first();
			$image->home = 0;
			$image->save();
			
		
			$image = Image::find($id);
			$image->home = 1;
			$image->save();
		
			return response("success",200);
	}
	
	public function getAllPictures(){
		$series = DB::table('series')
            ->join('images', 'series.id', '=', 'images.series_id')->select('series.name','images.title','images.id')->get();
		
			return response()->json($series);
		}

	
	public function getSeriesWithName(){
		$series = DB::table('series')
            ->join('images', 'series.id', '=', 'images.series_id')->select('series.name','series.link AS serieslink','images.title','images.link AS imagelink')->where('images.index',0)->where('show', 1)->get();
		
			return response()->json($series);
		}

	
	public function getSeriesDetails($id){
			$seriesDetails = Series::find($id)->getPictures;
			return response($seriesDetails);
		} 
	
		public function setSeriesDetails(Request $request){
			$data = json_decode($request->getContent(), true);
				
			foreach($data  as $picture){
				
					$img = Image::find(array_get($picture, 'id'));
					$img-> title =array_get($picture, 'title');
					 $mylink = preg_replace('~[^\pL\d]+~u', '-', $img-> title );
					  $mylink = iconv('utf-8', 'us-ascii//TRANSLIT', $mylink);
					  $mylink = preg_replace('~[^-\w]+~', '', $mylink);
					  $mylink = trim($mylink, '-');
					  $mylink = preg_replace('~-+~', '-', $mylink);
					  $mylink = strtolower($mylink);
					$img->link = $mylink;
					$img-> description = array_get($picture, 'description');
					$img-> sold = array_get($picture, 'sold');
					if($img->title !=''){
					$img-> show = array_get($picture, 'show');
					}
					else{
					$img-> show = 0;
					}
					$img-> index = array_get($picture, 'index');
					$img -> save();
					
			}
			
			return response("success",200);
		} 
	
		public function deleteSeriesImage($id){
			$img = Image::find($id);
			$seriesId= $img->series_id;
			
			$file_path =  public_path().$img->image;
			if(File::exists($file_path)){
				File::delete($file_path);
			}
			 $file_path =  public_path().$img->minimage;
			 
			if(File::exists($file_path)){			
				File::delete($file_path);
			}
			$img->delete();
			$seriesDetails = Series::find($seriesId)->getPictures;
			return response($seriesDetails);
		} 
	
    public function addSeriesName(Request $request){
		$series = new Series();
			$series->name = $request->input('name');
		$mylink = preg_replace('~[^\pL\d]+~u', '-', $request->input('name') );
					  $mylink = iconv('utf-8', 'us-ascii//TRANSLIT', $mylink);
					  $mylink = preg_replace('~[^-\w]+~', '', $mylink);
					  $mylink = trim($mylink, '-');
					  $mylink = preg_replace('~-+~', '-', $mylink);
					  $mylink = strtolower($mylink);
					$series->link = $mylink;
			$series -> save();
			
			$series = Series::all();
			return response($series,200);
		}        
	public function deleteSeries($id){
		 
		 foreach (Series::find($id)->getPictures  as $pictures){
			$file_path =  public_path().$pictures->image;
			
			if(File::exists($file_path)){
				File::delete($file_path);
			}
			 $file_path =  public_path().$pictures->minimage;
			 
			if(File::exists($file_path)){			
				File::delete($file_path);
			}
			 $pictures->delete();
		 }
		 Series::find($id)->delete();
		
		
		$series = Series::all();
        return response($series);
	} 
	
	public function uploadSeriesPictures(Request $request){
		if (!$request->hasFile('file')) {
   			 return response('File missing',403);
		}
		$validator = Validator::make($request->all(), [
            'id' => 'required',
        ]);
	
		
		$destinationPath = public_path().'/pictures/'.$request->input('id');
		
		$imgpath ='/pictures/'.$request->input('id').'/'.$request->file('file')->getClientOriginalName();
		$imgminpath = '/pictures/'.$request->input('id').'/Min'.$request->file('file')->getClientOriginalName();
		
		$request->file('file')->move($destinationPath,$request->file('file')->getClientOriginalName());
		$img =	ImageManager::make(public_path().$imgpath)->resize(300, 200);
		$img->save(public_path().$imgminpath);
		
		
		$image = new Image();
		$image->image =	 $imgpath;
		$image->minimage =	 $imgminpath;
		$image->title =	 $request->file('file')->getClientOriginalName();
		$mylink = preg_replace('~[^\pL\d]+~u', '-',$image->title  );
					  $mylink = iconv('utf-8', 'us-ascii//TRANSLIT', $mylink);
					  $mylink = preg_replace('~[^-\w]+~', '', $mylink);
					  $mylink = trim($mylink, '-');
					  $mylink = preg_replace('~-+~', '-', $mylink);
					  $mylink = strtolower($mylink);
		$image->link = $mylink;
		$image->series_id =	 $request->input('id');
		$image->show =	0;
		$lastindex = DB::table('images')->select('index')->where('series_id',$image->series_id)->orderBy('index', 'desc')->first();
		if($lastindex == null){
			$image->index =	0;
		}
		else{
			$lastindex= $lastindex->index;
			$image->index =	++$lastindex;
		}
		$image->width  = 	ImageManager::make(public_path().$imgpath)->width();
		$image->height =	ImageManager::make(public_path().$imgpath)->height();
		
		
		$image->save();
        return response($destinationPath);
	} 
	
}