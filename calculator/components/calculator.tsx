"use client"

import { useState } from "react"
import { X, Divide, Minus, Plus, Delete, Equal } from "lucide-react"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [expression, setExpression] = useState("")
  const [operation, setOperation] = useState("")
  const [prevValue, setPrevValue] = useState<number | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const clearDisplay = () => {
    setDisplay("0")
    setExpression("")
    setOperation("")
    setPrevValue(null)
    setWaitingForOperand(false)
    setShowResult(false)
  }

  const deleteLastChar = () => {
    if (showResult) {
      // If showing result, clear everything
      clearDisplay()
      return
    }

    if (expression.length > 0) {
      const newExpression = expression.slice(0, -1)
      setExpression(newExpression)

      // Extract the current number from the expression
      const parts = newExpression.split(/[+\-×÷]/)
      const lastPart = parts[parts.length - 1]
      setDisplay(lastPart || "0")
    } else if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }

  const inputDigit = (digit: string) => {
    if (showResult) {
      // If showing result, start fresh
      setDisplay(digit)
      setExpression(digit)
      setShowResult(false)
      setWaitingForOperand(false)
      return
    }

    if (waitingForOperand) {
      setDisplay(digit)
      setExpression(expression + digit)
      setWaitingForOperand(false)
    } else {
      const newDisplay = display === "0" ? digit : display + digit
      setDisplay(newDisplay)

      // Update expression by replacing the last number
      const parts = expression.split(/([+\-×÷])/)
      if (parts.length > 0) {
        parts[parts.length - 1] = newDisplay
        setExpression(parts.join(""))
      } else {
        setExpression(newDisplay)
      }
    }
  }

  const inputDecimal = () => {
    if (showResult) {
      setDisplay("0.")
      setExpression("0.")
      setShowResult(false)
      setWaitingForOperand(false)
      return
    }

    if (waitingForOperand) {
      setDisplay("0.")
      setExpression(expression + "0.")
      setWaitingForOperand(false)
      return
    }

    if (!display.includes(".")) {
      const newDisplay = display + "."
      setDisplay(newDisplay)

      // Update expression
      const parts = expression.split(/([+\-×÷])/)
      if (parts.length > 0) {
        parts[parts.length - 1] = newDisplay
        setExpression(parts.join(""))
      } else {
        setExpression(newDisplay)
      }
    }
  }

  const performOperation = (nextOperation: string) => {
    if (nextOperation === "=") {
      if (prevValue !== null && operation && !waitingForOperand) {
        const inputValue = Number.parseFloat(display)
        let result = 0

        switch (operation) {
          case "+":
            result = prevValue + inputValue
            break
          case "-":
            result = prevValue - inputValue
            break
          case "×":
            result = prevValue * inputValue
            break
          case "÷":
            result = prevValue / inputValue
            break
          default:
            return
        }

        setDisplay(String(result))
        setExpression(expression + " = " + String(result))
        setShowResult(true)
        setPrevValue(null)
        setOperation("")
        setWaitingForOperand(false)
      }
      return
    }

    const inputValue = Number.parseFloat(display)

    if (prevValue === null) {
      setPrevValue(inputValue)
      setExpression(expression + " " + nextOperation + " ")
    } else if (operation && !waitingForOperand) {
      const currentValue = prevValue || 0
      let newValue = 0

      switch (operation) {
        case "+":
          newValue = currentValue + inputValue
          break
        case "-":
          newValue = currentValue - inputValue
          break
        case "×":
          newValue = currentValue * inputValue
          break
        case "÷":
          newValue = currentValue / inputValue
          break
        default:
          break
      }

      setPrevValue(newValue)
      setDisplay(String(newValue))
      setExpression(String(newValue) + " " + nextOperation + " ")
    } else {
      setExpression(expression + " " + nextOperation + " ")
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
    setShowResult(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-full max-w-xs">
      <div className="bg-gray-100 rounded-xl p-4 mb-4 text-right h-20 flex flex-col justify-end">
        {expression && !showResult && (
          <div className="text-sm text-gray-500 overflow-x-auto whitespace-nowrap mb-1">{expression}</div>
        )}
        <div className="text-3xl font-medium text-gray-800 overflow-x-auto whitespace-nowrap">
          {showResult ? expression : display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button
          onClick={clearDisplay}
          className="bg-red-100 text-red-600 rounded-lg p-4 text-xl font-medium hover:bg-red-200 transition-colors"
        >
          C
        </button>
        <button
          onClick={deleteLastChar}
          className="bg-gray-200 text-gray-700 rounded-lg p-4 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <Delete size={20} />
        </button>
        <button
          onClick={() => performOperation("÷")}
          className="bg-blue-100 text-blue-600 rounded-lg p-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
        >
          <Divide size={20} />
        </button>
        <button
          onClick={() => performOperation("×")}
          className="bg-blue-100 text-blue-600 rounded-lg p-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
        >
          <X size={20} />
        </button>

        {[7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => inputDigit(num.toString())}
            className="bg-gray-100 text-gray-800 rounded-lg p-4 text-xl font-medium hover:bg-gray-200 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => performOperation("-")}
          className="bg-blue-100 text-blue-600 rounded-lg p-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
        >
          <Minus size={20} />
        </button>

        {[4, 5, 6].map((num) => (
          <button
            key={num}
            onClick={() => inputDigit(num.toString())}
            className="bg-gray-100 text-gray-800 rounded-lg p-4 text-xl font-medium hover:bg-gray-200 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => performOperation("+")}
          className="bg-blue-100 text-blue-600 rounded-lg p-4 flex items-center justify-center hover:bg-blue-200 transition-colors"
        >
          <Plus size={20} />
        </button>

        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => inputDigit(num.toString())}
            className="bg-gray-100 text-gray-800 rounded-lg p-4 text-xl font-medium hover:bg-gray-200 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => performOperation("=")}
          className="bg-blue-500 text-white rounded-lg p-4 row-span-2 flex items-center justify-center hover:bg-blue-600 transition-colors"
        >
          <Equal size={20} />
        </button>

        <button
          onClick={() => inputDigit("0")}
          className="bg-gray-100 text-gray-800 rounded-lg p-4 text-xl font-medium col-span-2 hover:bg-gray-200 transition-colors"
        >
          0
        </button>
        <button
          onClick={inputDecimal}
          className="bg-gray-100 text-gray-800 rounded-lg p-4 text-xl font-medium hover:bg-gray-200 transition-colors"
        >
          .
        </button>
      </div>
    </div>
  )
}
