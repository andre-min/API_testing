const usersSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
      "page": {
        "type": "number"
      },
      "per_page": {
        "type": "number"
      },
      "total": {
        "type": "number"
      },
      "total_pages": {
        "type": "number"
      },
      "data": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "email": {
              "type": "string"
            },
            "first_name": {
              "type": "string"
            },
            "last_name": {
              "type": "string"
            },
            "avatar": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "email",
            "first_name",
            "last_name",
            "avatar"
          ]
        }
      },
      "support": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "text": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "text"
        ]
      }
    },
    "required": [
      "page",
      "per_page",
      "total",
      "total_pages",
      "data",
      "support"
    ]
  }