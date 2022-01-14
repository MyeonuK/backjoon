#import <iostream>
int a[9999], d;
main()
{
    for (; d < 9999; a[d + d % 10 + d / 10 % 10 + d / 100 % 10 + d / 1000]++)
        if (!a[++d])
            std::cout << d << '\n';
}