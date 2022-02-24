## 利点と欠点

インスタンス化を一度に限定することで、使用されるメモリ容量を大幅に削減できる可能性があります。新しいインスタンスのためにメモリを毎回確保するのではなく、アプリケーション全体で参照される 1 つのインスタンスのためにメモリを確保すればよいからです。しかし、シングルトンは実際には**アンチパターン**と考えられており、JavaScript ではこれを避けることができます (というよりも、避ける*べき*です)。

Java や C++ などの多くのプログラミング言語では、JavaScript のようにオブジェクトを直接作成することはできません。これらのオブジェクト指向プログラミング言語では、まずクラスを作成する必要があり、そのクラスがオブジェクトを作成します。作成されたオブジェクトは、上記の JavaScript の例における `instance` のように、クラスのインスタンスの値をもちます。

しかし、上記の例で示したクラスの実装は、実はやり過ぎなのです。JavaScript ではオブジェクトを直接作成できるため、通常のオブジェクトを使用するだけでまったく同じ結果を得ることができます。シングルトンを使うことのデメリットをいくつか見てみましょう！

- js の場合変数がグローバルになるため、よきせぬ変更が生じる可能性がある

## 参考文献

- [Do React Hooks replace Redux - Eric Elliott](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)
- [Working with Singletons in JavaScript - Vijay Prasanna](https://alligator.io/js/js-singletons/)
- [JavaScript Design Patterns: The Singleton - Samier Saeed](https://www.sitepoint.com/javascript-design-patterns-singleton/)
- [Singleton - Refactoring Guru](https://refactoring.guru/design-patterns/singleton)
