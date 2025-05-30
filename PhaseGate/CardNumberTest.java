import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

	public class CardNumberTest {

	@Test
	public void testIfNumberIsValid() {
		int[] array = {4, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1}; 
		String returned = "VisaCard"
		String checked = AtmNumbers.CardNumbers(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsMaster() {
		int[] array = {5, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1}; 
		String returned = "Discover";
		String checked = AtmNumbers.CardNumbers(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsDiscover() {
		int[] array = {6, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1}; 
		String returned = "VisaCard";
		String checked = AtmNumbers.CardNumbers(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsAmericanExpress() {
		int[] array = {3, 4, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9, 2, 1}; 
		String returned = "American Express";
		String checked = AtmNumbers.CardNumbers(array);
		assertEquals(checked, returned);
	}
	@Test
	public void testIfNumberIsInvalidValid() {
		int[] array = {4, 5, 5, 5, 3, 3, 2, 8, 9, 6, 7, 0, 9}; 
		String returned = "Invalid Length";
		String checked = AtmNumbers.CardNumbers(array);
		assertEquals(checked, returned);
	}
}