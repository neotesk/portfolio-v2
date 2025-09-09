export class ReportManager {
    constructor () {
        this.reportAccessors = [];
    }

    report ( ...args ) {
        for ( const reporter of this.reportAccessors ) {
            reporter( ...args );
        }
    }

    addReportHandler ( func ) {
        return this.reportAccessors.push( func );
    }
}

export default new ReportManager();