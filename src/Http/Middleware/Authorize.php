<?php

namespace Bab55z\NovaSettingsTool\Http\Middleware;

use Bab55z\NovaSettingsTool\NovaSettingsTool;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return resolve(NovaSettingsTool::class)->authorize($request) ? $next($request) : abort(403);
    }
}
