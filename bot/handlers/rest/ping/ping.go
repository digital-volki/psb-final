package ping

import (
	"io"
	"log"
	"net/http"
)

func Handler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		if _, err := io.WriteString(w, "I'm psbBot"); err != nil {
			log.Printf("error to write response: %s", err)
		}
	})
}
