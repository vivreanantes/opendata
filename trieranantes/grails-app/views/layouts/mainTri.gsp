<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en" class="no-js"><!--<![endif]-->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><g:layoutTitle default="TriANantes"/></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="shortcut icon" href="${resource(dir: 'images', file: 'favicon.ico')}" type="image/x-icon">
		<link rel="apple-touch-icon" href="${resource(dir: 'images', file: 'apple-touch-icon.png')}">
		<link rel="apple-touch-icon" sizes="114x114" href="${resource(dir: 'images', file: 'apple-touch-icon-retina.png')}">
		<link rel="stylesheet" href="${resource(dir: 'css/blueprint', file: 'screen.css')}" type="text/css">
		<link rel="stylesheet" href="${resource(dir: 'css/blueprint', file: 'print.css')}" type="text/css" media="print">
		<!--[if IE 8 ]>    
		<link rel="stylesheet" href="${resource(dir: 'css/blueprint', file: 'ie.css')}" type="text/css">
		<![endif]-->
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'maintri.css')}" type="text/css">
		<link rel="stylesheet" href="${resource(dir: 'css', file: 'menu_assets/styles.css')}" type="text/css">
		<script src="http://maps.googleapis.com/maps/api/js?sensor=false" type="text/javascript"></script>
		
		<g:layoutHead/>
		<r:layoutResources />
		
	</head>
	<body class="projet">
		<div id="header" class="container">
			<div class="span-24">
				<g:render template="/layouts/header"/>
				<g:render template="/layouts/menus" />
        	</div>
        </div>
		<div class="container" style="padding-top:1em">
			<div id="leftcolon" class="span-6 prepend-1">
				<g:render template="/layouts/recherches"/>
        	</div>
        	<div id="main" class="span-16 prepend-1 last">
        		<div id="spinner" class="spinner" style="display:none;"><g:message code="spinner.alt" default="Loading&hellip;"/></div>		
				<g:layoutBody/>
        	</div>
        	<div id="footer" class="span-24">
				<g:render template="/layouts/footer" />	
        	</div>
			<r:layoutResources />
		</div>
	</body>
</html>