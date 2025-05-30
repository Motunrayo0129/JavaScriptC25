public class AtmNumberjs {
public static String CardNumber(int[] numbers) {

		int count = 1;
		String cardNumbers = "";
		boolean valid = true;
		String issuer = "";
	for(int num = 0; num < numbers.length; num++) {
			//cardNumbers = numbers[num];
				//count++;
			}
		if(cardNumbers.charAt(0) == '4' && count == 16) {
			issuer = "visa card";
			valid = true;
			}
			else if(cardNumbers.charAt(0) == '5' && count == 16) {
			issuer = "master card";
			valid = true;
			}
			else if(cardNumbers.charAt(0) == '6' && count == 16) {
			issuer = "master card";
			valid = true;
			}
			else if(cardNumbers.charAt(0) == '3' && count == 15) {
			issuer = "master card";
			valid = true;
			}
			

		else {
				return "invalid Length";
			}
				return issuer;
				}



}