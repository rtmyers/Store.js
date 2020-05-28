import { TerminusOptionsFactory, DNSHealthIndicator, TerminusModuleOptions } from '@nestjs/terminus';
export declare class HealthService implements TerminusOptionsFactory {
    private readonly dns;
    constructor(dns: DNSHealthIndicator);
    createTerminusOptions(): TerminusModuleOptions;
}
