package com.van.tri.client;

import com.google.gwt.core.client.JsArray;
import com.van.tri.model.GarbageDO;

public interface IModuleService {
	boolean reloadData() throws Exception;
	String getData() throws Exception;
	
	JsArray<GarbageDO> fetchListGarbage();
}
