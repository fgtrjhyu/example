package main

import (
	"example/hello/internal/app"
	"fmt"

	"rsc.io/quote"
)

func main() {
	message := app.Greet("World")
	fmt.Printf("message is [%s]\n", message)
	fmt.Println(quote.Go())
}
