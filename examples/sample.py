#!/usr/bin/env python3
"""
Sample Python Script for GitHub Learning Repository

This is an example Python file to demonstrate:
- Code structure
- Documentation
- Version control best practices
"""


def greet(name: str) -> str:
    """
    Generate a greeting message.
    
    Args:
        name: The name to greet
        
    Returns:
        A greeting message string
    """
    return f"Hello, {name}! Welcome to GitHub operations."


def calculate_sum(a: int, b: int) -> int:
    """
    Calculate the sum of two numbers.
    
    Args:
        a: First number
        b: Second number
        
    Returns:
        The sum of a and b
    """
    return a + b


def main():
    """Main function to demonstrate the script."""
    print(greet("GitHub Learner"))
    
    result = calculate_sum(5, 7)
    print(f"The sum of 5 and 7 is: {result}")
    
    print("\n✅ Sample script executed successfully!")


if __name__ == "__main__":
    main()
