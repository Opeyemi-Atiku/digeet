<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('auth_token')->nullable();
            $table->timestamp('auth_token_at')->nullable();
            $table->boolean('email_verified')->default(false);
            $table->char('gender');
            $table->string('plan')->nullable();
            $table->integer('wallet')->nullable();
            $table->integer('referred_by')->nullable();
            $table->string('referral_code')->nullable();
            $table->string('referral_auth')->nullable();
            $table->string('referral_status')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
