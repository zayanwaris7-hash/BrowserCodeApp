export const monacoLanguages = [
  { 
    id: "javascript", 
    judge0Id: 93, // Node.js (18.15.0)
    name: "JavaScript", 
    version: "Node.js 18.15.0", 
    syntax: "console.log('Hello World');" 
  },
  { 
    id: "typescript", 
    judge0Id: 94, // TypeScript (5.0.3)
    name: "TypeScript", 
    version: "5.0.3", 
    syntax: "const message: string = 'Hello World';\nconsole.log(message);" 
  },
  { 
    id: "python", 
    judge0Id: 71, // Python (3.8.1)
    name: "Python", 
    version: "3.8.1", 
    syntax: "print('Hello World')" 
  },
  { 
    id: "java", 
    judge0Id: 91, // Java (JDK 17.0.6)
    name: "Java", 
    version: "17", 
    syntax: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}" 
  },
  { 
    id: "cpp", 
    judge0Id: 76, // C++ (GCC 10.3.0)
    name: "C++", 
    version: "GCC 10.3.0", 
    syntax: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\" << std::endl;\n    return 0;\n}" 
  },
  { 
    id: "csharp", 
    judge0Id: 51, // C# (Mono 6.6.0.161)
    name: "C#", 
    version: "Mono 6.6.0.161", 
    syntax: "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello World\");\n    }\n}" 
  },
  { 
    id: "rust", 
    judge0Id: 73, // Rust (1.40.0)
    name: "Rust", 
    version: "1.40.0", 
    syntax: "fn main() {\n    println!(\"Hello World\");\n}" 
  },
  { 
    id: "go", 
    judge0Id: 95, // Go (1.18.5)
    name: "Go", 
    version: "1.18.5", 
    syntax: "package main\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello World\")\n}" 
  }
];