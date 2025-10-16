package work.areanet;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class GreetingTest {

	@Test
	public void testNew() {
		Greeting greeting = new Greeting("Hello,world");
		assertNotNull(greeting.getMessage());
	}

	@Test
	public void testThrowsAssert() {
		assertThrows(AssertionError.class, () -> {
			new Greeting(null);
		});
	}
}
