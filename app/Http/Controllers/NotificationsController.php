<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    public function create(Request $request) {



        $notification = Notification::create([
            'user_id' => 1,
            'notification' => $request->notification,
            'type' => 'custom',
            'status' => 'new'
        ]);

        if($notification) {
            return response()->json(['status' => 'successful', 'message' => 'Notification saved'], 200);
        }
    }

    public function notifications(Request $request) {
        $notifications = Notification::where('user_id', $request->user_id)->get();

        return response()->json($notifications);
    }

    public function notification(Request $request) {
        $notification = Notification::where('id', $request->id)->first();

        return response()->json($notification);
    }

    public function update(Request $request) {
        Notification::where('id', $request->id)->update([
            'status' => 'seen'
        ]);
    }

    public function delete(Request $request) {
        Notification::where('id', $request->id)->delete();
    }
}
