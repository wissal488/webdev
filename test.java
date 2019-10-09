package liste;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	/*	ArrayList<String> MyList = new ArrayList<String>();
		MyList.add("Omar");
		MyList.add("Disso");
		MyList.add("Pablo");
		MyList.add("Ghanii");
		
		Iterator it = MyList.iterator();
		while(it.hasNext()) { 
			it.next();
			 it.remove();
			
		}

		System.out.println(MyList.toString());
		System.out.println(MyList.size()); */
		
		Map <Integer,String> map = new HashMap<Integer, String>();
		map.put(1, "ess");
		map.put(2, "marr");
		map.put(3, "makna");
		map.put(4, "safi");
		map.put(5, "casa");
		Set<Integer> setInt=map.keySet();
		Iterator<Integer> it= setInt.iterator();
		while(it.hasNext()) {
			int key=it.next();
			 System.out.println("key: " + key + " value: " + map.get(key));
		}
		
	}
	
	
	

}
