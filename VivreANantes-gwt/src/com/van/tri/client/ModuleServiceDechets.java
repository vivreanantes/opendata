package com.van.tri.client;
import java.util.List;

import com.google.gwt.core.client.JsArray;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.van.tri.model.GarbageDO;

public class ModuleServiceDechets implements IModuleService {

	private final static String jsondata="{ \"garbages\" : [{    \"col_0\" : \"\",    \"col_1\" : \"acides\",    \"col_2\" : \"scu_toxiquedivers\",    \"col_3\" : \"cat_ddm\",    \"col_4\" : \"\",    \"col_5\" : \"\",    \"col_6\" : \"\",    \"col_7\" : \"\"   }, {    \"col_0\" : \"\",    \"col_1\" : \"aérosols\",    \"col_2\" : \"scu_toxiquedivers\",    \"col_3\" : \"cat_ddm\",    \"col_4\" : \"\",    \"col_5\" : \"\",    \"col_6\" : \"\",    \"col_7\" : \"\"   }, {    \"col_0\" : \"\",    \"col_1\" : \"agenda\",    \"col_2\" : \"cu_papierscartons\",    \"col_3\" : \"cat_papiercarton\",    \"col_4\" : \"\",    \"col_5\" : \"\",    \"col_6\" : \"\",    \"col_7\" : \"\"   }, {    \"col_0\" : \"\",    \"col_1\" : \"Ampoule classique\",    \"col_2\" : \"cu_divers\",    \"col_3\" : \"cat_omr\",    \"col_4\" : \"\",    \"col_5\" : \"\",    \"col_6\" : \"\",    \"col_7\" : \"ampoule_petit.png\"   }]}";
	
	
	private final static String jsondata2="[{\"code\" : \"AC1\",    \"name\" : \"Ampoule classique\",  \"description\" : \"TitiTataToto\",    \"picture\" : \"ampoule_petit.png\" },{\"code\" : \"AC1\",    \"name\" : \"Ampoule classique5\",  \"description\" : \"TitiTataToto\",    \"picture\" : \"ampoule_petit.png\" },{\"code\" : \"AC1\",    \"name\" : \"Ampoule classique2\",  \"description\" : \"TitiTataToto\",    \"picture\" : \"ampoule_petit.png\" },{\"code\" : \"AC1\",    \"name\" : \"Ampoule classique3\",  \"description\" : \"TitiTataToto\",    \"picture\" : \"ampoule_petit.png\" }]";
	/* @return Recharge les données JSON Déchets (Appel Webservice)
	 * @see com.romeo.demo1.client.ModuleService#reloadData()
	 */
	@Override
	public boolean reloadData() throws Exception {
		// TODO Auto-generated method stub
		return false;
	}

	/* @return Retourne	les données JSON Déchets
	 * @see com.romeo.demo1.client.ModuleService#getData()
	 */
	@Override
	public String getData() throws Exception {
		return null;
	}
	
	
	
	public JsArray<GarbageDO> fetchListGarbage() {		
		JsArray<GarbageDO> arrayGarbage = asArrayOfStockData(ModuleServiceDechets.jsondata2);
		
		return arrayGarbage;
	}
	
	 private final native JsArray<GarbageDO> asArrayOfStockData(String json) /*-{
	    return eval(json);
	  }-*/;
	
	public int testJson()
	{
		JSONValue jsonvalue=JSONParser.parseStrict(this.jsondata);
		JSONObject jsonobj=jsonvalue.isObject();
		JSONValue dechets=jsonobj.get("garbages");
		
		
		JSONArray listedechets=dechets.isArray();
		
		
		
		int size=listedechets.size();
		
		/*
		 for (int j=0; j<=pricesArray.size()-1; j++) {
			 JSONObject priceObj = pricesArray.get(j).isObject();
			 	                        double price = priceObj.get("price").isNumber().doubleValue();
			 	                        if (j!=pricesArray.size()-1) {
			 	                            priceSb.append("-");
			 	                        }
		 }
		 */
		
		return size;
	}

}
