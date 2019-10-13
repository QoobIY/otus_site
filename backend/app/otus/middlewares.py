from django.utils.deprecation import MiddlewareMixin
import time
from influxdb import InfluxDBClient

client = InfluxDBClient(database='django')


class StatsMiddleware(MiddlewareMixin):
    def process_request(self, request):
        request.start_time = time.time()

    def process_response(self, request, response):
        total = time.time() - request.start_time
        j_body = [{
            "measurement": "response_time",
            "tags": {"host": request.get_host(), 'path': request.get_full_path()},
            "fields": {"delta": total}
        }]
        try:
            client.write_points(j_body)
        except:
            pass
        return response
