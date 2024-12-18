import subprocess
import sys

def run_tests():
    print("Запуск модульных тестов...")
    try:
        # Запускаем npm test
        result = subprocess.run(['npm', 'test'], check=True)
        print("Все тесты прошли успешно!")
        return 0
    except subprocess.CalledProcessError:
        print("Тесты не прошли! Коммит отменен.")
        return 1

if __name__ == "__main__":
    sys.exit(run_tests())