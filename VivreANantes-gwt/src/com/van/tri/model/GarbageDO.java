/**
 * 
 */
package com.van.tri.model;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * @author van
 * 
 */
public class GarbageDO extends JavaScriptObject {

	// Overlay types always have protected, zero argument constructors.
	protected GarbageDO() {
	}

//	private String id;
//
//	private String code;
//
//	private String description;
//
//	private String picture;
//	
//	private String name;
	
	

	// JSNI methods to get stock data.
	public final native String getId()  /*-{ return this.id; }-*/;

	public final native String getCode() /*-{ return this.code; }-*/;

	public final native String getDescription() /*-{ return this.description; }-*/;

	public final native String getPicture() /*-{ return this.picture; }-*/;
	
	public final native String getName() /*-{ return this.name; }-*/;

}
