import java.util.*;

public class VirusDetect {
    public static void main(String[] args) {
        
        // Bad files will contain "virus" or "malware", but "antivirus" and "notvirus" will not be viruses.
        // Return "PC Files: Empty" if there are no files left on the computer.

        // Create a list of virus objects to test

            ArrayList<ArrayList<String>> allTests = new ArrayList<ArrayList<String>>();

            ArrayList <String> testList1 = new ArrayList <String>();
            testList1.add("spotifysetup.exe");
            testList1.add("virus.exe");
            testList1.add("dog.jpg");
            allTests.add(testList1);
            
            ArrayList <String> testList2 = new ArrayList <String>();
            testList2.add("antivirus.exe");
            testList2.add("cat.png");
            testList2.add("lethalmalware.exe");
            testList2.add("dangerousvirus.exe");
            allTests.add(testList2);
            
            ArrayList <String> testList3 = new ArrayList <String>();
            testList3.add("notvirus.exe");
            testList3.add("funnycat.gif");
            allTests.add(testList3);

    }

    // Function to detect viruses
    public static ArrayList<String> virusDetector(ArrayList<ArrayList<String>> allTests){
        
         


        // return updated list of files after removing viruses
        return null;
    }
}
